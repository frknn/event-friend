import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loggedOut, loggedIn } from '../../actions/loginoutActions';
import store from '../../store';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      visib: true
    }

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.props.loggedIn();
  }

  onClick = async (e) => {
    const res = await fetch("http://localhost:5000/users/me/logoutall",
      {
        method: 'POST',
        headers:
        {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })

    localStorage.removeItem('access_token');
    localStorage.removeItem('current_user');
    this.props.loggedOut();

    this.setState({ visib: !this.state.visib })
  }

  render() {
    return (
      <div>
        <header style={headerStyle}>

          <h1>EVENT FRIEND</h1>
          {this.props.isVisible ? <div><Link style={linkStyle} to="/home">Etkinlikleri Gör</Link> | <Link style={linkStyle} to="/post">Etkinlik Oluştur</Link> | <Link to="/" style={linkStyle} onClick={this.onClick}> Çıkış Yap </Link></div> : null}

        </header>
      </div>
    )
  }
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

const mapStateToProps = state => ({
  isVisible: state.logs.isVisible
})

export default connect(mapStateToProps, { loggedOut, loggedIn })(Header);
// export default Header;


