import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

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
  },
  {
    URL: 'jalbum.net',
    handle: 'chumbatch9',
    view_today: 89,
    view_monthly: 3134,
    uview_today: 10,
    uview_monthly: 857
  },
  {
    URL: 'technorati.com',
    handle: 'tscaya',
    view_today: 11,
    view_monthly: 692,
    uview_today: 87,
    uview_monthly: 462
  },
  {
    URL: 'cloudflare.com',
    handle: 'kmawb',
    view_today: 78,
    view_monthly: 4969,
    uview_today: 11,
    uview_monthly: 2177
  },
  {
    URL: 'digg.com',
    handle: 'jiwanickic',
    view_today: 13,
    view_monthly: 2122,
    uview_today: 45,
    uview_monthly: 462
  },
  {
    URL: 'imdb.com',
    handle: 'wkennand',
    view_today: 87,
    view_monthly: 2798,
    uview_today: 21,
    uview_monthly: 593
  },
  {
    URL: 'webeden.co.uk',
    handle: 'bbadere',
    view_today: 64,
    view_monthly: 3529,
    uview_today: 90,
    uview_monthly: 1773
  },
  {
    URL: '163.com',
    handle: 'cbladesmithf',
    view_today: 8,
    view_monthly: 2836,
    uview_today: 60,
    uview_monthly: 2769
  },
  {
    URL: 'diigo.com',
    handle: 'wwhardleyg',
    view_today: 77,
    view_monthly: 4400,
    uview_today: 13,
    uview_monthly: 1967
  },
  {
    URL: 'domainmarket.com',
    handle: 'qmaccrieh',
    view_today: 8,
    view_monthly: 771,
    uview_today: 13,
    uview_monthly: 2694
  },
  {
    URL: 'amazonaws.com',
    handle: 'fmegroffi',
    view_today: 96,
    view_monthly: 723,
    uview_today: 4,
    uview_monthly: 1294
  },
  {
    URL: 'phpbb.com',
    handle: 'kclowneyj',
    view_today: 81,
    view_monthly: 3589,
    uview_today: 94,
    uview_monthly: 2156
  }
];

const smallCell = {
  width: '12%'
};

export default class UrlList extends Component {
  state = {
    edit: false
  };

  render() {
    return (
      <Table condensed hover>
        <thead>
          <tr>
            <th>URL</th>
            <th>Handle</th>
            <th style={smallCell}>Views Today</th>
            <th style={smallCell}>Views Montly</th>
            <th style={smallCell}>Unique Today</th>
            <th style={smallCell}>Unique Monthly</th>
          </tr>
        </thead>
        <tbody>
          {dummy.map((url, idx) => {
            return (
              <tr key={idx}>
                <td>{url.URL}</td>
                <td>{url.handle}</td>
                <td style={smallCell}>{url.view_today}</td>
                <td style={smallCell}>{url.view_monthly}</td>
                <td style={smallCell}>{url.uview_today}</td>
                <td style={smallCell}>{url.uview_monthly}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
