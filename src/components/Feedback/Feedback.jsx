import React, { useState } from 'react'
import Style from './Feedback.module.scss'

export const Feedback = () => {
  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(true)

  const [name, setName] = useState('')
  const [validName, setValidName] = useState(true)

  const [message, setMessage] = useState('')
  const [validMessage, setValidMessage] = useState(true)

  const [check, setCheck] = useState('')
  const [validCheck, setValidCheck] = useState(true)

  const [gender, setGender] = useState('')

  const [file, setFile] = useState('')

  const sendFeedback = () => {
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email.toLowerCase(),
      )
    )
      setValidEmail(false)
    else setValidEmail(true)

    if (!name) setValidName(false)
    else setValidName(true)

    if (!message) setValidMessage(false)
    else setValidMessage(true)

    if (!check) setValidCheck(false)
    else setValidCheck(true)

    console.log({ email, name, message, check, gender, file })
  }

  return (
    <div className={Style.feedback}>
      <div className="container">
        <div>
          <h4>Обратная связь</h4>
          <hr />
        </div>
        <div className={Style.form}>
          <div className={Style.input}>
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={{ borderColor: !validEmail ? 'red' : '' }}
            />
          </div>

          <div className={Style.input}>
            <label className="form-label">Имя</label>
            <input
              className="form-control"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              style={{ borderColor: !validName ? 'red' : '' }}
            />
          </div>

          <div className={Style.input}>
            <label className="form-label">Сообщение</label>
            <textarea
              className="form-control"
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              style={{ borderColor: !validMessage ? 'red' : '' }}
            ></textarea>
          </div>

          <div className={Style.checkbox}>
            <input
              className="form-check-input"
              type="checkbox"
              name=""
              id="sendEmail"
              checked={check}
              onChange={(event) => setCheck(event.target.checked)}
              style={{ borderColor: !validCheck ? 'red' : '' }}
            />
            <label className="form-label" htmlFor="sendEmail">
              Даю согласие на рассылку рекламы
            </label>
          </div>

          <div className={Style.input}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="man"
                value="man"
                onChange={(event) => setGender(event.target.value)}
              />
              <label className="form-label" htmlFor="man">
                Мужчина
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="woman"
                value="woman"
                onChange={(event) => setGender(event.target.value)}
              />
              <label className="form-label" htmlFor="woman">
                Женщина
              </label>
            </div>
          </div>

          <div className={Style.input}>
            <label className="form-label">Загрузка картинки</label>
            <div class="input-group mb-3">
              <input
                type="file"
                class="form-control"
                name="file"
                id="inputGroupFile02"
                onChange={(event) => setFile(event.target.files[0])}
              />
              <label class="input-group-text" for="inputGroupFile02">
                Загрузка
              </label>
            </div>
          </div>

          <div className={Style.input}>
            <button
              className="btn btn btn-outline-dark form-control"
              onClick={() => sendFeedback()}
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
