function ToggleOn(props) {
    return <p>ON</p>
  }
  
  function ToggleOff(props) {
    return <p>OFF</p>
  }
  
  class Toggle extends React.Component {
      constructor(props) {
          super(props)
  
          this.state = {
              isOn: false
          }
      }
  
      handleClick() {
          this.setState({
              isOn: !this.state.isOn
          })
      }
  
      render() {
          return (
              <div>
                  <h1 onClick={this.handleClick.bind(this)}>Toggle</h1>
                  {this.state.isOn ? (
                      <ToggleOn />
                  ) : (
                      <ToggleOff />
                  )}
              </div>
          )
      }
  }
  
  