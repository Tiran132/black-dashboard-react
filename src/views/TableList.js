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
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
} from "reactstrap";


const API_URL = "http://localhost:5001/"

const getVisitors = (name) => {
  return fetch(API_URL + "all_detected_users", {
    method: 'GET',
    headers:{'Content-Type': 'application/json'},
  })
  .then(async response => response.json())
}


function Tables() {
  const [people, setPeople] = useState([])

  const handleVisitors = async () => {
      const res = await getVisitors()
      console.log(res)
      setPeople(res.people)
  }
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Таблица посещений</CardTitle>
              </CardHeader>
              <CardBody>
                <Button onClick={handleVisitors}>Загрузить</Button>
                { people.length && (<>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Id</th>
                      <th>ФИО</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      people.map(p => {
                        return (
                          <>
                          <tr>
                            <td>{p.person.id}</td>
                            <td>{p.person.name}</td>
                          </tr>
                          </>
                        )
                      })
                    }
                  </tbody>
                </Table>
                </>)
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
