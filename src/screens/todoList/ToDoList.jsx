import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Button from '../../components/Button'
import { Header, StatusSelector } from './styled'
import { AddTaskForm } from '../../components/AddTaskForm'
import ListItem from '../../components/ListItem'

const ToDoList = () => {
  const [active, setActive] = useState(1)
  const [tasks, setTasks] = useState([])

  const handleClick = (id) => () => {
    setActive(id)
  }
  //создаем функцию,принимающую один параметр taskText(текст новой задачи,которую надо добавить в список)
  const handleAddText = (taskText) => {
    //создаем массив,внутри которого используем spread syntax,который разворачивает все элементы массива tasks в новый массив
    // text: taskText, id: '' это объект,представляющий новую задачу
    //в итоге newTasks это новый массив,содержащий все старые задачи и новую
    const newTasks = [...tasks, { text: taskText, id: uuidv4() }]
    //перерисовываем компонент с обновленным списком задач
    setTasks(newTasks)
  }

  //создаем функцию, которая удаляет задачу из списка задач по ее идентификатору id
  const removeTask = (id) => {
    //используем для удаления задачи filter(это метод массива,который создает новый массив)
    // id: taskID это деструктуризация объекта в параметре функции обратного вызова,она извлекает id из каждой задачи
    //и присваивает ее локальной переменной taskID
    //id !== taskID это условие сравнивает id задачи,которую нужно удалить с taskID текущего элемента,если не равно,то сохраняет в newTasks
    const newTasks = tasks.filter(({ id: taskID }) => id !== taskID)
    //функция обновляет состояние списка задач
    setTasks(newTasks)
  }

  //редактирование задачи,передаем id задачи,которую нужно отредактировать и новый текст taskText
  const editTask = (id, taskText) => {
    //используем метод массива reduce чтобы пройтись по текущему массиву задач и создать новый
    //асс(аккумулятор) накапливает результат работы, task-текущий элемент
    const newTasks = tasks.reduce((acc, task) => {
      //если id задачи равен переданному id(является ли текущая задача той,которую нужно изменить)
      if (task.id === id) {
        //то создается новая версия задачи с обновленным text и добавялется в аккумулятор асс
        return [(acc, { ...task, text: taskText })]
      }
      //если id задачи не совпадает,задача остается неизменной и также добавляется в асс
      return [...acc, task]
      //метод reduce инициализируется пустым массивом []
    }, [])
    setTasks(newTasks)
  }
  return (
    <div>
      <Header>
        <img
          src="/ToDoPlanner/bee-left-above.svg"
          alt="BeeLeftAbove"
          className="small-icon left-above"
        />
        <h1>To Do List</h1>
        <img
          src="/ToDoPlanner/bee-top-right.svg"
          alt="BeeTopRight"
          className="small-icon top-right"
        />
      </Header>
      <StatusSelector>
        <br />
        <Button
          active={active === 2}
          onClick={handleClick(2)}
          text="В работе"
        />

        <Button
          active={active === 3}
          onClick={handleClick(3)}
          text="Готово"
          color="#BF7654"
        />
      </StatusSelector>
      <div>
        {/*используем метод map для перебора массива задач,внутри создаем функцию,которая проходит по каждому элементу массива tasks и возвращает новый массив.
        для каждой задачи создаем компонент ListItem,которому передаем пропсы: key-уникальный ключ для каждого элемента,
        task-передача самой задачи в компонент,
        onEdit в этот пропс передаем функцию editTask, которая вызывается при редактировании задачи
        onRemove в этот пропс передаем функцию removeTask, которая вызывается при удалении задачи
        */}
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            task={task}
            onEdit={editTask}
            onRemove={removeTask}
          />
        ))}
      </div>
      {/*Компонент для добавления новой задачи, ему передаем функцию handleAddTask через пропс onAddTask, которая будет вызываться при добавлении новой задачи*/}
      <AddTaskForm onAddTask={handleAddText} />
    </div>
  )
}

export default ToDoList
