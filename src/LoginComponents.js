import { Text, useTheme,View,Heading,useAuthenticator,Button} from '@aws-amplify/ui-react';

const components = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <img src={require('./img/logo.png')} width="50%" height="30%" alt="logo"/>
        </View>
      );
    },
  
    Footer() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={`${tokens.colors.neutral['80']}`}>
            &copy; All Rights Reserved
          </Text>
        </View>
      );
    },
  
    SignIn: {
      Header() {
        const { tokens } = useTheme();
  
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            로그인
          </Heading>
        );
      },
      Footer() {
        const { toResetPassword } = useAuthenticator();
  
        return (
          <View textAlign="center">
            <Button
              fontWeight="normal"
              onClick={toResetPassword}
              size="small"
              variation="link"
            >
              비밀번호 찾기
            </Button>
          </View>
        );
      },
    },
  
    SignUp: {
      Header() {
        const { tokens } = useTheme();
  
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            회원가입
          </Heading>
        );
      },
      Footer() {
        const { toSignIn } = useAuthenticator();
  
        return (
          <View textAlign="center">
            <Button
              fontWeight="normal"
              onClick={toSignIn}
              size="small"
              variation="link"
            >
              돌아가기
            </Button>
          </View>
        );
      },
    },
    ConfirmSignUp: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            정보 입력
          </Heading>
        );
      },
      Footer() {
        return <Text></Text>;
      },
    },
    SetupTOTP: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            정보 입력
          </Heading>
        );
      },
      Footer() {
        return <Text></Text>;
      },
    },
    ConfirmSignIn: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            정보 입력
          </Heading>
        );
      },
      Footer() {
        return <Text></Text>;
      },
    },
    ResetPassword: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            정보 입력
          </Heading>
        );
      },
      Footer() {
        return <Text></Text>;
      },
    },
    ConfirmResetPassword: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            정보 입력
          </Heading>
        );
      },
      Footer() {
        return <Text></Text>;
      },
    },
  };
  
const formFields = {
    signIn: {
      username: {
        labelHidden: false,
        placeholder: '이메일',
        autocomplete: "off"
      },
    },
    signUp: {
      email: {
        autocomplete: "off"
      },
      name:{
        autocomplete: "off",
        order:1,
        placeholder: '사용자 이름'
      },
      password: {
        labelHidden: true,
        isRequired: false,
      },
      confirm_password: {
        labelHidden: true,
      },
    },
    forceNewPassword: {
      password: {
        labelHidden: false,
        placeholder: '비밀번호',
      },
    },
    resetPassword: {
      username: {
        labelHidden: false,
        placeholder: '이메일',
      },
    },
    confirmResetPassword: {
      confirmation_code: {
        labelHidden: false,
        placeholder: '확인코드',
        label: 'New Label',
        isRequired: false,
      },
      confirm_password: {
        labelHidden: false,
        placeholder: '비밀번호',
      },
    },
    setupTOTP: {
      QR: {
        totpIssuer: 'test issuer',
        totpUsername: 'amplify_qr_test_user',
      },
      confirmation_code: {
        labelHidden: false,
        label: 'New Label',
        placeholder: '확인코드',
        isRequired: false,
      },
    },
    confirmSignIn: {
      confirmation_code: {
        labelHidden: false,
        label: 'New Label',
        placeholder: '확인코드',
        isRequired: false,
      },
    },
  };

export {components,formFields};