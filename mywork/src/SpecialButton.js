import React, { Component } from 'react'; //引入react基本元件
import './SpecialButton.css'; //引入css樣式表

class SpecialButton extends Component{ //定義 SpecialButton就是我的類別

    constructor(){ //建構子，當新增一個實體(instance)出來的時候，會先執行這個功能
        //這裡通常會指定預設的值或預設的功能
        super();//這是一個執行父元素(Compontnt)的constructor的功能
        this.state={ //每一個實體有一個自己的statea儲存元件的狀態的地方
            status: "unclick" //通常會定義很多個屬性
        };
    }

    render(){ //Component 內建的功能,目的是輸出要顯示的東西
        return( //輸出的方式就是用return（要顯示的東西）
            <span className="special-button">
                <button className={this.state.status} onClick={this.handleClick}>  {/* onClick 是 component 內建的功能，會去處理按下去的事件 */}
                   {/* 會修改是因為className 是個變量，會隨著State改變 */}
                   {/* onClick 內容指定他去執行 this.handleClick */}

                    {/* {this.props.label} */}
                    {/*上面那個的寫法 因為我們要處理按下去要變字 所以要改成下面寫法  */}
                    {/* 以下是處理判斷式的寫法呦 */}
                    {/* (判斷的內容) ？ 如果是ture顯示的東西 ;如果是false顯示的東西 */}
                    {/* 兩個＝＝是指判斷;一個 ＝是指 指定的意思 */}
                    {(this.state.status == "clicked") ? "Sayunara" : this.props.label }
                    {/* 用來顯示來自props的外部變量 */}
                </button>
            </span>

        );
    }
    //handleClick 這是我們定義的功能的名字
    // = () ＝> 是指他是一個function （功能）
    handleClick = () =>{
        //這個功能的目的是當案下去之後，改變按鈕的狀態
        //所以要改變 state的 status
        this.setState({ //this就是指元素自己，setState 是內建功能，代表改變 State 的狀態
            status: "clicked"
        })
    }
}



export default SpecialButton; //每個js寫完要輸出給別人的時候，要輸出執行結果，這邊的執行結果就是輸出SpecailButton的 Class