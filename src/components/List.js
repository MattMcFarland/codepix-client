import React from 'react';
import ajax from 'superagent';
import { MiniCard } from './partials';


const ListItem = ({data}) => (
  <li>
    <MiniCard {...data} />
  </li>
);

export class List extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    window.ga('send', 'pageview', '/list');
    ajax.get('/api/list')
      .end((err, res) => {
        if (!err) {
          let data = res.body.sort((a, b) => {
            return a.createdAt > b.createdAt ? -1 : 1;
          });
          this.setState({data});
        }
      });
  }

  render() {
    return (
      <div>
        {this.state.data ?
          <ul style={{listStyleType: 'none'}}>
            {this.state.data.map(function (item) {
              return <ListItem key={item.id} data={item}/>;
            })}
          </ul> :
          <p>Loading Data...</p>}
      </div>
    );
  }
}
