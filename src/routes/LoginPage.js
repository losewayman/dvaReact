import React from 'react';
import { connect } from 'dva';
import { Button, Tabs, Input, message } from 'antd';
import { routerRedux } from 'dva/router';

import styles from './LoginPage.css';

const { TabPane } = Tabs;


class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loginAccount:'',
            loginPassword:'',
            signAccount:'',
            signPassword:'',
        };
      
      }

    callback = (key) => {
        
    }

    toLogin = () => {
        const {loginAccount,loginPassword} = this.state;
        const {dispatch} = this.props;
        dispatch({
            type:'login/login',
            payload:{
                account:loginAccount,
                password:loginPassword,
            },
            callback:(res)=>{
                if(res.data.status===0){
                    message.error(res.data.msg)
                }else{
                    dispatch(routerRedux.push('/main'))
                }
            }
        })
    }

    toSign = () => {
        const {signAccount,signPassword} = this.state;
        const {dispatch} = this.props;
        dispatch({
            type:'login/sign',
            payload:{
                account:signAccount,
                password:signPassword
            },
            callback:(res)=>{
                if(res.data.status===0){
                    message.error(res.data.msg);
                }else{
                    message.success(res.data.msg);
                    this.setState({
                        signAccount:'',
                        signPassword:''
                    })
                }
            }
        })
    }

    loginAccount = (e) => {
        this.setState({
            loginAccount:e.target.value
        })
    }

    loginPassword = (e) => {
        this.setState({
            loginPassword:e.target.value
        })
    }
    signAccount = (e) => {
        this.setState({
            signAccount:e.target.value
        })
    }

    signPassword = (e) => {
        this.setState({
            signPassword:e.target.value
        })
    }

    render(){
        const {loginAccount,signAccount,loginPassword,signPassword} = this.state;
        return (
    <div>
      <div className={styles.bodys}>
        <div className={styles.rightLogin}>
        <Tabs defaultActiveKey="1" type="card" tabBarGutter={0} tabBarStyle={{width:'400px'}} onChange={this.callback}>
        <TabPane tab="登录" key="1">
                <div className={styles.login_log}>
                    <Input placeholder="请输入账号" value={loginAccount} onChange={this.loginAccount}/>
                    <Input placeholder="请输入密码" value={loginPassword} type="password" onChange={this.loginPassword}/>
                    <Button type="primary" onClick={this.toLogin} block >登 录</Button>
                </div>
            </TabPane>
            <TabPane tab="注册" key="2">
                <div className={styles.login_log}>
                    <Input placeholder="请输入账号" value={signAccount} onChange={this.signAccount} />
                    <Input placeholder="6~16位字母数字" value={signPassword} type="password" onChange={this.signPassword}/>
                    <Button type="primary" block onClick={this.toSign} >注 册</Button>
                </div>
            </TabPane>
        </Tabs>,
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
