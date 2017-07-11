var React = require('react');
var {Index, IndexLink, Link} = require('react-router');

var Nav =  React.createClass({


    render:function() {

        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer</li>
                        <li>
                            <IndexLink to="/" activeClassName="active-link" >Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active-link" >Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Author <a href='https://github.com/nofranks' target="_BLANK" style={{display: 'inline-block'}}>Olly Edgell</a>
                        </li>

                    </ul>

                </div>

            </div>
        );
    }
});

module.exports = Nav;