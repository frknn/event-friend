import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class RegistrationForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ad: "",
      soyad: "",
      email: "",
      kullaniciadi: "",
      sifre: "",
      sifretekrar: "",
      error: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  validateForm = () => {
    const { ad, soyad, email, kullaniciadi, sifre, sifretekrar } = this.state;

    if (ad === "" || soyad === "" || email === "" || kullaniciadi === "" || sifre === "" || sifretekrar === "" || sifre !== sifretekrar) {
      return false;
    }
    return true;
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const { ad, soyad, email, kullaniciadi, sifre } = this.state;

    let newUser = {
      name: ad,
      lastname: soyad,
      email: email,
      username: kullaniciadi,
      password: sifre
    }

    if (!this.validateForm()) {
      this.setState({ error: true })
      return;
    }

    const res = await fetch("http://localhost:8080/registration", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })

    const user = await res.json();
    console.log(user);

    this.props.history.push("/login");
  }

  render() {
    return (
      <div>
        <h1 className="mt-2">Kayıt Ol</h1>
        <div className="container">
          {
            this.state.error ?
              <div className="alert alert-danger">
                Lütfen boş alanları doldurun ve şifrelerinizi eşleştirin.
              </div> : null
          }
          <form onSubmit={this.onSubmit} className="col-md-8 mx-auto mb-3">

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputName">Adınız</label>
                <input onChange={this.onChange} type="text" className="form-control" name="ad" id="inputName" placeholder="Adınızı giriniz" value={this.state.ad} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputLastname">Soyadınız</label>
                <input onChange={this.onChange} type="text" className="form-control" name="soyad" id="inputLastname" placeholder="Soyadınızı giriniz" value={this.state.soyad} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="inputEmail">E-mail</label>
              <input onChange={this.onChange} type="email" className="form-control" name="email" id="inputEmail" placeholder="E-mail adresinizi giriniz" value={this.state.email} />
            </div>

            <div className="form-group">
              <label htmlFor="inputUsername">Kullanıcı Adı</label>
              <input onChange={this.onChange} type="text" className="form-control" name="kullaniciadi" id="inputUsername" placeholder="Kullanıcı adınızı giriniz" value={this.state.kullaniciadi} />
            </div>

            <div className="form-group">
              <label htmlFor="inputPassword">Şifre</label>
              <input onChange={this.onChange} type="password" className="form-control" name="sifre" id="inputPassword" placeholder="Şifrenizi giriniz" value={this.state.sifre} />
            </div>

            <div className="form-group">
              <label htmlFor="inputPasswordVerify">Şifre Tekrar</label>
              <input onChange={this.onChange} type="password" className="form-control" name="sifretekrar" id="inputPasswordVerify" placeholder="Şifrenizi tekrar giriniz" value={this.state.sifretekrar} />
            </div>

            <button type="submit" className="btn btn-primary">Kayıt Ol</button><br/><br/>
            <span>Hesabın varsa <Link to="/login">giriş yap.</Link></span>
          </form>
        </div>
      </div>
    )
  }
}

export default RegistrationForm;
