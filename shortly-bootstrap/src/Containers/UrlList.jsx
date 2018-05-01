import React, { Component } from 'react';
import { Table, Button, ButtonGroup } from 'react-bootstrap';

const dummy = [
  {
    URL: 'icio.us',
    handle: 'rbensley0',
    view_today: 61,
    view_monthly: 2270,
    uview_today: 43,
    uview_monthly: 771
  },
  {
    URL: 'paginegialle.it',
    handle: 'kslocombe1',
    view_today: 50,
    view_monthly: 4277,
    uview_today: 81,
    uview_monthly: 2433
  },
  {
    URL: 'dagondesign.com',
    handle: 'thucks2',
    view_today: 54,
    view_monthly: 4412,
    uview_today: 89,
    uview_monthly: 1203
  },
  {
    URL: 'pinterest.com',
    handle: 'akearle3',
    view_today: 58,
    view_monthly: 3621,
    uview_today: 13,
    uview_monthly: 3629
  },
  {
    URL: 'wiley.com',
    handle: 'cbance4',
    view_today: 13,
    view_monthly: 4372,
    uview_today: 2,
    uview_monthly: 2879
  },
  {
    URL: 'hostgator.com',
    handle: 'nberinger5',
    view_today: 100,
    view_monthly: 689,
    uview_today: 69,
    uview_monthly: 3055
  },
  {
    URL: 'who.int',
    handle: 'atyght6',
    view_today: 31,
    view_monthly: 2615,
    uview_today: 15,
    uview_monthly: 2451
  },
  {
    URL: 'gizmodo.com',
    handle: 'cbreeder7',
    view_today: 93,
    view_monthly: 4216,
    uview_today: 43,
    uview_monthly: 3512
  },
  {
    URL: 'about.com',
    handle: 'ibreed8',
    view_today: 32,
    view_monthly: 4867,
    uview_today: 11,
    uview_monthly: 3763
  }
];

const smallCell = {
  width: '8%',
  textAlign: 'center'
};

export default class UrlList extends Component {
  state = {
    edit: false
  };

  render() {
    return (
      <Table striped hover>
        <thead>
          <tr>
            <th />
            <th>URL</th>
            <th>Handle</th>
            <th style={smallCell}>V</th>
            <th style={smallCell}>VM</th>
            <th style={smallCell}>UV</th>
            <th style={smallCell}>UVM</th>
            <th style={smallCell} />
          </tr>
        </thead>
        <tbody>
          {dummy.map((url, idx) => {
            return (
              <tr key={idx}>
                <td style={smallCell}>
                  <Button bsSize="small" bsStyle="primary">
                    <i class="fas fa-search-plus" />
                  </Button>
                </td>
                <td>{url.URL}</td>
                <td>{url.handle}</td>
                <td style={smallCell}>{url.view_today}</td>
                <td style={smallCell}>{url.view_monthly}</td>
                <td style={smallCell}>{url.uview_today}</td>
                <td style={smallCell}>{url.uview_monthly}</td>
                <td style={smallCell}>
                  <ButtonGroup>
                    <Button bsSize="small" bsStyle="success">
                      <i class="fas fa-edit" />
                    </Button>
                    <Button bsSize="small" bsStyle="danger">
                      <i class="fas fa-trash-alt" />
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
