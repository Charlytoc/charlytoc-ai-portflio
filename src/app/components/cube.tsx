'use client'
import React, { useEffect, useState } from 'react';
import * as THREE from 'three';

export default function Cube() {
    const [isHovered, setIsHovered] = useState(false); // State variable to track hover state
  
    useEffect(() => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setClearAlpha(0);
      const cube = document.getElementById('cube');
      if (cube) {
        const { width, height } = cube.getBoundingClientRect(); // Get width and height of div cube
        renderer.setSize(width, height); // Set renderer size to match div cube size
        cube.appendChild(renderer.domElement);
      }
  
      // Add objects to the scene here, for example:
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x85c5ce, wireframe: true }); // Set material to show wireframe
      const cubeMesh = new THREE.Mesh(geometry, material);
      scene.add(cubeMesh);
  
      // Set camera position and look at the scene
      camera.position.z = 1.5;
      camera.lookAt(scene.position);
  
      // Rendering function
      const render = () => {
        requestAnimationFrame(render);
        if (!isHovered) { // Only rotate if not hovered
          cubeMesh.rotation.x += 0.01;
          cubeMesh.rotation.y += 0.01;
        }
        renderer.render(scene, camera);
      };
  
      // Call the render function to start rendering the scene
      render();
  
      // Add event listener for mouseover and mouseout events on canvas element
      const handleMouseOver = () => {
        setIsHovered(true);
      };
      const handleMouseOut = () => {
        setIsHovered(false);
      };
      cubeMesh.addEventListener('mouseover', handleMouseOver);
      cubeMesh.addEventListener('mouseout', handleMouseOut);
  
      // Clean up function
      return () => {
        // Clean up Three.js resources if needed
        cubeMesh.removeEventListener('mouseover', handleMouseOver);
        cubeMesh.removeEventListener('mouseout', handleMouseOut);
      };
    }, []);
  
  
    return (
      <div id='cube'></div>
    );
  }