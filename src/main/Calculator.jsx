import React, {Component} from "react"
import "./Calculator.css"
import Button from "../components/Button"
import Display from "../components/Display"


export default class Calculator extends Component {


    render(){
        return (

            <div className="calculator">
                <Display value={100}></Display>
                <Button label="AC">0</Button>
                <Button label="/">0</Button>
                <Button label="7">0</Button>
                <Button label="8">0</Button>
                <Button label="9">0</Button>
                <Button label="*">0</Button>
                <Button label="4">0</Button>
                <Button label="5">0</Button>
                <Button label="6">0</Button>
                <Button label="-">0</Button>
                <Button label="1">0</Button>
                <Button label="2">0</Button>
                <Button label="3">0</Button>
                <Button label="+">0</Button>
                <Button label="0">0</Button>
                <Button label=".">0</Button>
                <Button label="=">0</Button>

            </div>


        )
    }

}