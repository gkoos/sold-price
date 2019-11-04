import React, { Component } from "react";
import Houses from "../Houses/index";

import axios from "axios";

export default class PriceMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            data: [],
        };
        this.loadData = this.loadData.bind(this);
    }

    componentWillMount() {
        this.loadData();
    }

    async loadData() {
        const promise = await axios("http://localhost:3000/api/data/1");
        const status = promise.status;
        if(status===200)
        {
            const data = promise.data;
            this.setState({data});
            this.setState({loaded: true});
        }
    }

    render() {
        if (this.state.loaded) {
            return (
                <div className="content">
                    <div>
                        <svg width="505px" height="505px">
                            <rect x="0" y="0" width="505px" height="505px" fill="black" />
                            <Houses data={this.state.data} />
                        </svg>
                    </div>
                </div>
            )
        }
        else {
            return <div>Loading...</div>
        }
    }
}