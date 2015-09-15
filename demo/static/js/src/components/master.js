import React from "react";


export default class Master extends React.Component {
    constructor(props) {
        super(props);
    }

    content() {
        return "";
    }

    render() {
        return (
            <html>
                <head>
                    <meta charSet="UTF-8" />
                    <title>Foo</title>
                </head>

                <html lang={this.props.language} />
                <body>
                    <div>
                        <h1>Master page</h1>
                        <div id="app">{this.props.children}</div>
                    </div>

                    <script type="text/javascript" src="/static/js/dist/vendor.js"></script>
                    <script type="text/javascript" src="/static/js/dist/demo.js"></script>
                </body>
            </html>
        )
    }
}
