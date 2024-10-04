import React, { useState } from 'react'
import Java from '../assets/img/java.png'
import Weather from '../assets/img/weather.png'
import Node from '../assets/img/Nodefarm.png'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectDesc } from '../components/ProjectDesc'

const Projectpage = () => {
  const [visible, setvisible] = useState(false)
  const [getkey, setkey] = useState(0)

  const onOpen = ()=>{
    setvisible(true)
  }
  const onClose = () => {

    setvisible(false)
  }

  const setvalues = (n) => {
    setkey(n);
  }

  const Projects = [
    {
      title: "Pet Shop",
      oneline: "Management of pet shop operations...",
      desc: "The Pet Shop Management Application is designed to streamline and optimize the operations of a pet store, providing an intuitive and efficient platform for both administrators and customers. It offers comprehensive features that cover various aspects of shop management, including inventory tracking, sales processing, customer management, and reporting.",
      Tools: "Visual-Stdio Code, MySQL Workbench",
      Language: "Java",
      gitRepo: "https://github.com/imVetrivel/PetsMart_console",
      img: Java
    },
    {
      title: "Weather App",
      oneline: "Weather app with real-time forecasts... ",
      desc: "weather",
      Tools: "Visual-Stdio Code",
      Language: "JavaScript",
      img: Weather
    },
    {
      title: "Node-Farm",
      oneline: "",
      desc: "node",
      Tools: "Visual-Stdio Code",
      Language: "Java",
      img: Node
    }
  ]

  return (
    <>
      <ProjectCard open={onOpen} data={Projects} setvalue={setvalues} />

      {
        visible && (<ProjectDesc exit={onClose} data={Projects[getkey]} />)
      }
    </>

  )
}

export { Projectpage };