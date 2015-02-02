var React = require('react/dist/react-with-addons.js');

var CELL = require('./cell');

var ROW = React.createClass({
  render: function(){
    var self = this;
    var cells =  this.props.row.get('cells').unshift(null)
      .toArray()
      // mutable array of immutables
      .map(function(cellData,i){
      if (i === 0){
        return (<th className={"r-spreadsheet"} key={i}>{self.props.index + 1 }</th>);
      } else {
        return (<CELL cellData={cellData} state={ self.props.state.get('cells').get(i-1) } colIndex={i-1} rowIndex={self.props.index} key={i} />); 
      }
    });
    return (
      <tr>
        {cells}
      </tr>
    )
  },
  shouldComponentUpdate: function(nextProps,nextState){
    if (this.props.state === nextProps.state &&
        this.props.row === nextProps.row) {
      return false;
    }
    return true;
  }
});

module.exports = ROW;
