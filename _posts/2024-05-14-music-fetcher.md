---
layout: post
title: Music Fetcher
categories: personal
image: "assets/images/music-fetcher.png"
p_url: "https://github.com/Solaris-99/music-fetcher"
p_url_name: "github"
---

Un programa en electron que es un básicamente un frontend para yt-dlp. El programa implementa una libreria para hacer la busqueda sobre
los videos de youtube, y otra para descargarlos. Originalmente, tenía pensado utilizar una sola, pero esta devolvía el video en un
formato stream y parecía que era mucha complicación convertir eso a un archivo de audio.
Para el front-end utiliza react, tailwind y materialui. Algo interesante sobre este proyecto es que cuando se asigna un listener de electron
(para los eventos de intercomunicación de procesos) a través de un useEffect de react, estos listeners quedan en memoria, aunque los componentes
no estén renderizados. Lo que me llevo a eliminar y recrear los listeners en donde sea necesario. Sin esto, el programa crea demasiados listeners
muy rápidamente y empieza a funcionar muy mal