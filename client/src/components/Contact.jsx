import React, { Component } from 'react'


class Contact extends Component {
    render() {
        return (
                <div class="container1"><br/>
                <div class="profil-description"> Numéro de téléphone</div><br/>
                <i class="fa fa-phone">  0678456778</i>
                <div class="profil-description">Adresse Email</div><br/>
                <i class="fa fa-envelope"> Avovat@gmail.com</i>
                <div class="profil-description">Location</div><br/>
                <i class="fa fa-map-marker"> 250 rue Saint Jacques -Paris</i><br/>
                <a href='/'><button class="follow-btn">Accueil</button></a> 
                <a href='/'><button class="follow-btn">Modifier</button></a> 


                </div>
        )
    }
}

export default Contact
