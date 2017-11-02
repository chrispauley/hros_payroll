import React, {Component} from 'react';
import css from './DropLoader.css';

class DropLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      className: 'drop-zone-hide'
    }

  }


  componentDidMount() {
    window.addEventListener('mouseup', this.onDragLeave);
    window.addEventListener('dragenter', this.onDragEnter);
    window.addEventListener('dragover', this.onDragOver);
    document.getElementById('dragbox').addEventListener('dragleave', this.onDragLeave);
    window.addEventListener('drop', this.onDrop);
  }
  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onDragLeave);
    window.removeEventListener('dragenter', this.onDragEnter);
    window.addEventListener('dragover', this.onDragOver);
    document.getElementById('dragbox').removeEventListener('dragleave', this.onDragLeave);
    window.removeEventListener('drop', this.onDrop);
  }

  onDragEnter = (e) => {
    this.setState({ className: 'drop-zone-show'});
    e.stopPropagation();
    e.preventDefault();
    return false;
  }
  onDragLeave = (e) => {
    this.setState({className: 'drop-zone-hide'});
    e.stopPropagation();
    e.preventDefault();
    return false;
  }
  onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  onDrop = (e) => {
    e.preventDefault();
    let files = e.dataTransfer.files;
    let that = this;
    // console.log('Files dropped: ', files);
    // Upload files
    for(var i=0; i < files.length; i++){
      // console.log(files[0].type, files[0].name);
      if (files[0].type.indexOf("application/json") == 0){
        var reader = new FileReader();
        reader.onload = function(e) {
          try {
            var json = JSON.parse(reader.result);
            that.setState({data: json});
            // Return the data...
            that.props.onChange(json);
          } catch (ex) {
            alert('ex when trying to parse json = ' + ex);
          }
        }
        reader.readAsText(files[0]);
      }
    }
    this.setState({className: 'drop-zone-hide'});

    return false;
  }

  render() {
    // var json = JSON.stringify(this.state.data, 2);
    return (
      <div className='row'>
        <div id="dragbox" className={this.state.className}>
          <span>Drop a json instance file to upload</span>
          {/* <form><input type='text' value={json}/></form> */}
        </div>
      </div>
    );
  }
}

export default DropLoader;
