var Menu = React.createClass({
  getInitialState() {
    return { /* initial state */ };
  },
  render: function() {
    return (
      <div>
        {this.props.section}
        <ul>
          {this.props.items.map(function(item) {
            return ( <li>{item}</li> )
          })}
        </ul>
      </div>
    )
  }
});

// MY FIRST COMPONENT
var App = React.createClass({
  getInitialState: function() {
    return {
      query: ''
    }
  },
  style: {
    searchContainer: {
      border: '1px solid #efefef',
      padding: '1rem',
      margin: '1rem',
      display: 'flex',
      justifyContent: 'center'
    },
    searchBar: {
      width: '40%',
      textAlign: 'center'
    }
  },
  onNewSearchValue: function(e) {
    console.log('new car entered', e.target.value);
    this.setState({
      query: e.target.value
    })
  },
  onSearchButtonClick: function() {
    console.log('You searched for ', this.state.query)
  },
  render: function() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <div style={this.style.searchContainer}>
          <input style={this.style.searchBar} role="search" type="text" placeholder="Search our menu... I promise we don't have it" onChange={this.onNewSearchValue.bind(this)} /><button onClick={this.onSearchButtonClick}>Search</button>
        </div>
        <Menu section="Appetizers" items={['fries', 'onion rings', 'fries and onion rings mixed together', 'one single cheese curd but it\'s really big'].filter((item) => { return item.indexOf(this.state.query) > -1 })} />
        <Menu section="Entrees" items={['a burger', 'the same burger with a different name', 'a burger with... cheese?', 'the "definitely not a veggie" burger'].filter((item) => { return item.indexOf(this.state.query) > -1 })} />
        <Menu section="Desserts" items={['ice cream', 'melted ice-cream', 'extra-frozen ice cream', 'creamed ice'].filter((item) => { return item.indexOf(this.state.query) > -1 })} />
      </div>
    )
  }
});

// Bootstrapping
ReactDOM.render(<App name="React Cafe" />, document.getElementById('root'))
