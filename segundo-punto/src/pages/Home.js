import React from 'react'

class Musica extends React.Component{

    constructor(props){
      super(props)
      this.state={artist:[]}
    }

    componentWillMount(){
      fetch('https://musicbrainz.org/ws/2/')
      .then((response)=>{
        return response.json()
      })
      .then((artist)=>{
        this.setState({artist:artist})
      })
    }

    render() {
      if (this.state.artist.length > 0) {
        return (
          <div className="container-fluid">
            
          </div>
        )
      } else {
        return <p className="text-center">Cargando empleados...</p>
      }
    }
  
  }
  

export default Musica