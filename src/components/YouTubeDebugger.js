// Code YouTubeDebugger Component Here

import React from "react";

class YouTubeDebugger extends React.Component{

  state = { errors: [],
          user: null,
          settings: {
            bitrate: 8,
            video: {
              resolution: '1080p'
            }
          }
        }

  increaseBitrate = () => {
    this.setState({ settings: Object.assign({}, this.state.settings, { bitrate: 12})
    })
    console.log(this.state.settings)
  }

  changeResolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, { resolution: '720p' })
      })
    })
    console.log(this.state.settings.video)
  }

  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.increaseBitrate}>Bitrate</button>
        <button className="resolution" onClick={this.changeResolution}>Resolution</button>
      </div>
    )
  }
}


export default YouTubeDebugger;
