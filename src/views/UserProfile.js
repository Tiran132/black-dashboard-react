/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";



const API_URL = "http://localhost:5001/"

const getUserPhotos = (name) => {
  return fetch(API_URL + "user_photo?name=" + name,{
    method: 'GET',
    headers:{'Content-Type': 'application/json'},
  })
  .then(async response => response.json())
}
function UserProfile() {
  const [name, setName] = useState("")
  const [photos, setPhotos] = useState([])

  const getPhotos = async () => {
    if (name.split(" ").length <= 1)
      {
        alert("Введите ФИО полностью!")
        return;
      }
      
      const res = await getUserPhotos(name)
      setPhotos(res.photos)
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
            <Card>
              <CardHeader>
                <h5 className="title">Получить фотографии</h5>
              </CardHeader>
              
              <CardBody>

              <Input placeholder="ФИО (полностью)" type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" onClick={getPhotos}>
                  Получить
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <h5 className="title">Фотографии с мероприятия</h5>
              </CardHeader>
              
              <CardBody>
                {photos.length && (
                  <>
                  {
                    photos.map(p => 
                    <Col>
                      <img src={p} />
                    </Col>)
                  }
                  </>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
