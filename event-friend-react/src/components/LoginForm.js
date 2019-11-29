import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions/loginoutActions';
import { Link } from 'react-router-dom';


class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: false,
      loginerror: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  validateForm = () => {
    const { email, password } = this.state;

    if (email === "" || password === "") {
      return false;
    }
    return true;
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;


    let url = `http://localhost:5000/users/login`;

    if (!this.validateForm()) {
      this.setState({ error: true })
      return;
    } else { this.setState({ error: false }) }


    const res = await fetch(url,{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({email: email, password: password})
    })

    const response = await res.json();

    if (!response["token"]) {
      this.setState({ loginerror: true })
      console.log(response)
      return;
    }

    localStorage.setItem('access_token', response["token"]);
    localStorage.setItem('current_user', JSON.stringify(response["user"]))
    console.log(localStorage.getItem('access_token'))
    console.log(localStorage.getItem('current_user'))
    

    // const currUser = await fetch("http://localhost:8080/user", {
    //   headers: {
    //     'Authorization': 'bearer ' + localStorage.getItem('access_token')
    //   }
    // });
    // const myCurrUser = await currUser.json();
    // console.log(myCurrUser.name);
    // localStorage.setItem('current_user', JSON.stringify(myCurrUser));
    // console.log(JSON.parse(localStorage.getItem('current_user')));


    this.setState({ loginerror: false })
    this.props.loggedIn();
    this.props.history.push("/home");
    // console.log(this.props.currentUser);
  }

  render() {
    return (
      <div>
        <h1 className="mt-2">Giriş Yap</h1>
        <hr />
        <div className="container">
          {
            this.state.error ?
              <div className="alert alert-danger">
                Lütfen boş alanları doldurun
              </div> : this.state.loginerror ? <div className="alert alert-danger">
                Kullanıcı adı veya şifre yanlış!
              </div> : null
          }
          <form onSubmit={this.onSubmit} className="col-md-8 mx-auto mb-3">

            <div className="form-group">
              <label htmlFor="inputUsername">E-mail</label>
              <input onChange={this.onChange} type="text" className="form-control" name="email" id="inputUsername" placeholder="Kullanıcı adınızı giriniz" value={this.state.kullaniciadi} />
            </div>

            <div className="form-group">
              <label htmlFor="inputPassword">Şifre</label>
              <input onChange={this.onChange} type="password" className="form-control" name="password" id="inputPassword" placeholder="Şifrenizi giriniz" value={this.state.sifre} />
            </div>

            <button type="submit" className="btn btn-primary">Giriş</button><br /><br />
            <span>Hesabın yok mu? <Link to="/">Kayıt ol.</Link></span>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isVisible: state.logs.isVisible
})

export default connect(mapStateToProps, { loggedIn, })(LoginForm);
// export default LoginForm;