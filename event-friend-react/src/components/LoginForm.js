import React, { Component } from 'react'

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      kullaniciadi: "",
      sifre: "",
      error: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  validateForm = () => {
    const { kullaniciadi, sifre } = this.state;

    if (kullaniciadi === "" || sifre === "") {
      return false;
    }
    return true;
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { kullaniciadi, sifre } = this.state;

    let url = "http://localhost:8080/oauth/token?grant_type=password" + "&username=" + kullaniciadi + "&password=" + sifre;

    if (!this.validateForm()) {
      this.setState({ error: true })
      return;
    }

    fetch(url, {
      headers: {
        'Authorization': 'Basic ZnVya2FuOjEyMzQ1Ng=='
      }
    })
      .then(res => res.json())
      .then(loggedInUser => {
        console.log(loggedInUser);
        localStorage.setItem('access_token',loggedInUser.access_token);
        console.log('localstorageden gelen: ' + localStorage.getItem('access_token'));
      })

    this.props.history.push("/home");
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
              </div> : null
          }
          <form onSubmit={this.onSubmit} className="col-md-8 mx-auto mb-3">

            <div className="form-group">
              <label htmlFor="inputUsername">Kullanıcı Adı</label>
              <input onChange={this.onChange} type="text" className="form-control" name="kullaniciadi" id="inputUsername" placeholder="Kullanıcı adınızı giriniz" value={this.state.kullaniciadi} />
            </div>

            <div className="form-group">
              <label htmlFor="inputPassword">Şifre</label>
              <input onChange={this.onChange} type="password" className="form-control" name="sifre" id="inputPassword" placeholder="Şifrenizi giriniz" value={this.state.sifre} />
            </div>

            <button type="submit" className="btn btn-primary">Giriş</button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;
