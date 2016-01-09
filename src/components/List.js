import React from 'react';
import { MiniCard } from './partials';
import Relay from 'react-relay';


class ListComponent extends React.Component {


  renderList = () => {
    return this.props.cards.cards.edges.map(edge =>
      <MiniCard key={edge.node.id} {...edge.node} />
    );
  }

  render() {
    console.log(this.props.cards.cards.edges);
    return (
      <div>{this.renderList()}</div>
    );
  }
}



export const List = Relay.createContainer(ListComponent, {
  fragments: {
    cards: () => Relay.QL`
      fragment on CodePixAPI {
        cards(first: 10) {
          edges {
            node {
              id,
              title,
              description,
              dateCreated,
              imageUrl,
              shareUrl,
              shasum,
              author {
                id,
                username
              }
            }
          }
        }
      }
    `
  }
});
