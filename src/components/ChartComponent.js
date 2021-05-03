import React from 'react';
import InputSelect from './InputSelect';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from 'victory';

class ChartComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDifficult: true,
            showFun: true
        }

        this.handleFilterChange = this.handleFilterChange.bind(this)
    }

    handleFilterChange(name, state) {
        
        if (name === 'difficult') {
            this.setState(() => {
                return {
                    showDifficult: state
                }
            })
        } else if (name === 'fun') {
            this.setState(() => {
                return {
                    showFun: state
                }
            })
        }
    }

    render() {
        const renderDifficultBar = (showDifficult) => {
            if (showDifficult) {
                return (
                    <VictoryBar
                        colorScale={"blue"}
                        alignment="middle"
                        data={this.props.studentData}
                        x="assignment"
                        y="difficult"
                    />
                )
            }
        }

        const renderFunBar = (showFun) => {
            if (showFun) {
                return (
                    <VictoryBar
                        colorScale={"green"}
                        alignment="end"
                        data={this.props.studentData}
                        x="assignment"
                        y="fun"
                    />
                )
            }
        }

        return (
            <div className="ChartComponent">
                <div className="InputSelect">
                    <InputSelect
                        selectName={'difficult'}
                        selectText={' How difficult was the assignment?'}
                        selectChange={this.handleFilterChange}
                    />
                    <br />
                    <InputSelect
                        selectName={'fun'}
                        selectText={' How fun was the assignment?'}
                        selectChange={this.handleFilterChange}
                    />
                </div>

                <VictoryChart
                    domainPadding={{ x: 12 }}
                    className="VictoryChart-BarChart"
                    padding={{ left: 20, top: 20, right: 20, bottom: 100 }}
                >
                    <VictoryAxis
                        
                        tickFormat={this.props.studentData.assigment}
                        style={{
                            tickLabels: { angle: 45, textAnchor: 'start', fontSize: 5 },
                            ticks: { stroke: "grey", size: 5 }
                        }}
                    />
                    <VictoryAxis
                        dependentAxis
                        
                        tickFormat={[1, 2, 3, 4, 5]}
                        style={{
                            tickLabels: { fontSize: 3 },
                            ticks: { stroke: "grey", size: 5 }
                        }}
                    />
                    <VictoryGroup offset={13} style={{ data: { width: 8 } }}>
                        {renderDifficultBar(this.state.showDifficult)}
                        {renderFunBar(this.state.showFun)}
                    </VictoryGroup>
                </VictoryChart>
                <div className="ComponentInfo">
                    <p className="fun">How fun was the assignment?</p>
                    <p className="difficult">How difficult was the assignment?</p>
                </div>
            </div>
        )
    }
}

export default ChartComponent;