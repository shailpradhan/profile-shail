import { useEffect, useRef } from 'react'

function NameMonolith() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (
      !mount ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('WebGLRenderingContext' in window) ||
      !('IntersectionObserver' in window)
    ) {
      return
    }

    let cancelled = false
    let cleanupScene: (() => void) | undefined

    const startScene = async () => {
      try {
        const THREE = await import('three')
        if (cancelled) return

        const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true })
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100)
        camera.position.set(0, 0, 9)

        // const face = document.createElement('canvas')
        // face.width = 1200
        // face.height = 720
        // const context = face.getContext('2d')
        // if (!context) {
        //   console.error('The name sculpture could not create its canvas texture.')
        //   renderer.dispose()
        //   return
        // }

        // context.fillStyle = '#121a20'
        // context.fillRect(0, 0, face.width, face.height)
        // context.fillStyle = '#edf1f2'
        // context.font = '400 420px "Bebas Neue", Impact, sans-serif'
        // context.textAlign = 'center'
        // context.textBaseline = 'middle'
        // context.fillText('SP', face.width / 2, face.height / 2 + 12)
        // context.fillStyle = '#9dc3cb'
        // context.fillRect(90, face.height - 62, face.width - 180, 8)

        // const texture = new THREE.CanvasTexture(face)
        const image = new Image()
        image.src = '/images/me.JPG'

        await new Promise<void>((resolve, reject) => {
          image.onload = () => resolve()
          image.onerror = () => reject(new Error('Failed to load portrait image'))
        })

        if (cancelled) return

        const texture = new THREE.Texture(image)
        texture.colorSpace = THREE.SRGBColorSpace
        texture.needsUpdate = true
        const sideMaterial = new THREE.MeshStandardMaterial({
          color: '#34474e',
          metalness: 0.58,
          roughness: 0.42,
        })
        const faceMaterial = new THREE.MeshStandardMaterial({
          map: texture,
          metalness: 0.18,
          roughness: 0.72,
        })
        const geometry = new THREE.BoxGeometry(5.2, 3.1, 0.32)
        const monolith = new THREE.Group()
        const slab = new THREE.Mesh(geometry, [
          sideMaterial,
          sideMaterial,
          sideMaterial,
          sideMaterial,
          faceMaterial,
          faceMaterial,
        ])
        monolith.add(slab)
        scene.add(monolith)

        scene.add(new THREE.AmbientLight('#d8e5e6', 1.8))
        const keyLight = new THREE.DirectionalLight('#ffffff', 2.7)
        keyLight.position.set(-3, 4, 7)
        scene.add(keyLight)

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
        renderer.setClearColor('#0a0d11', 1)
        renderer.domElement.setAttribute('aria-hidden', 'true')
        renderer.domElement.setAttribute('role', 'presentation')
        mount.appendChild(renderer.domElement)

        const resizeObserver = new ResizeObserver(() => {
          const { width, height } = mount.getBoundingClientRect()
          const safeHeight = Math.max(height, 1)
          renderer.setSize(width, safeHeight, false)
          camera.aspect = width / safeHeight
          camera.updateProjectionMatrix()
        })
        resizeObserver.observe(mount)

        let targetX = -0.08
        let targetY = 0.18
        const handlePointerMove = (event: PointerEvent) => {
          const bounds = mount.getBoundingClientRect()
          targetY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.5
          targetX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -0.28
        }
        const resetPointer = () => {
          targetX = -0.08
          targetY = 0.18
        }
        mount.addEventListener('pointermove', handlePointerMove)
        mount.addEventListener('pointerleave', resetPointer)

        renderer.setAnimationLoop(() => {
          monolith.rotation.x += (targetX - monolith.rotation.x) * 0.045
          monolith.rotation.y += (targetY - monolith.rotation.y) * 0.045
          renderer.render(scene, camera)
        })
        mount.classList.add('is-ready')

        cleanupScene = () => {
          mount.classList.remove('is-ready')
          resizeObserver.disconnect()
          mount.removeEventListener('pointermove', handlePointerMove)
          mount.removeEventListener('pointerleave', resetPointer)
          renderer.setAnimationLoop(null)
          renderer.dispose()
          geometry.dispose()
          texture.dispose()
          sideMaterial.dispose()
          faceMaterial.dispose()
          renderer.domElement.remove()
        }
      } catch (error) {
        console.error('The name sculpture could not start WebGL.', error)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect()
          void startScene()
        }
      },
      { rootMargin: '120px' },
    )
    observer.observe(mount)

    return () => {
      cancelled = true
      observer.disconnect()
      cleanupScene?.()
    }
  }, [])

  return (
    <div
      aria-label="Interactive three-dimensional SP monolith. Move your pointer to change its angle."
      className="monolith"
      ref={mountRef}
      role="img"
    >
      <span aria-hidden="true" className="monolith-fallback">
        SP
      </span>
      <span aria-hidden="true" className="visually-hidden">
        Interactive three-dimensional initials sculpture
      </span>
    </div>
  )
}

export default NameMonolith
