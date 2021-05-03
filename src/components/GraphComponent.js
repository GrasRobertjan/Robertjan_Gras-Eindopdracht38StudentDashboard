import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

class GraphComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        
        return (
            <div className="GraphComponent">
                <VictoryChart
                    padding={{ left: 30, top: 30, right: 50, bottom: 100 }}
                >
                    <VictoryAxis
                        
                        tickFormat={this.props.averageStudent.assigment}
                        style={{
                            tickLabels: { angle: 45, textAnchor: 'start', fontSize: 6 },
                            ticks: { stroke: "black", size: 5 },
                            grid: { stroke: "red" }
                        }}
                    />
                    <VictoryAxis
                        dependentAxis
                        
                        tickFormat={[0, 1, 2, 3, 4, 5]}
                        style={{
                            tickLabels: { fontSize: 10 },
                            ticks: { stroke: "black", size: 5 },
                            grid: { stroke: "red" }
                        }}
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: "black" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={this.props.averageStudent}
                        x="assignment"
                        y="average"
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: "darkblue" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={this.props.averageAll}
                        x="assignment"
                        y="average"
                    />
                </VictoryChart>
                <div className="ComponentInfo">
                    <p className="averageAll">Average grade of all the students</p>
                    <p className="averageOneStudent">Average grade of the student</p>
                </div>
            </div >
        )
    }
}

export default GraphComponent;