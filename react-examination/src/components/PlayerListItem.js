import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './PlayerListItem.css';

class PlayerListItem extends Component {
  render() {
    return (
      <li className='playerListItem'>
        <div className='playerInfos'>
          <div>
            <span>{this.props.name}</span>
          </div>
          <div>
            <small>
              {this.props.team} · {this.props.position}
            </small>
          </div>
        </div>
        <div className='playerActions'>
          <button
            className={`btn btn-default ${'btnAction'}`}
            onClick={() => this.props.starPlayer(this.props.id)}
          >
            <i
              className={classnames('fa', {
                'fa-star': this.props.starred,
                'fa-star-o': !this.props.starred,
              })}
            />
          </button>
          <button
            className={`btn btn-default ${'btnAction'}`}
            onClick={() => this.props.deletePlayer(this.props.id)}
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

PlayerListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starPlayer: PropTypes.func.isRequired,
};

export default PlayerListItem;