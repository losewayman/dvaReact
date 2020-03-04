import React from 'react';
import { connect } from 'dva';

import styles from './MainPage.css';

class LoginPage extends React.Component{

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch({
            type:'login/iflogin',
            payload:{},
        })
    }
    render(){
        console.log(this.props,this.state)
        const {iflogin} = this.props;
        return (
            <div>
              
              <div className={styles.bodys}>
                <div className={styles.lefts}>
                    <div className={styles.item}>格瑞特果惹</div>
                    <div className={styles.item}>格瑞特果惹</div>
                    <div className={styles.item}>格瑞特果惹</div>
                    <div className={styles.item}>格瑞特果惹</div>
                    <div className={styles.item}>格瑞特果惹</div>
                </div>
                <div className={styles.rights}>
                    <div className={styles.header}> </div>
                </div>
              </div>
            </div>
        );
    }
}

LoginPage.propTypes = {
};

function mapStateToProps(state) {
    return state.login;
}

export default connect(mapStateToProps)(LoginPage);
