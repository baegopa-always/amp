import { translations} from '@aws-amplify/ui-react';
import { I18n } from 'aws-amplify';

I18n.putVocabularies(translations);
I18n.setLanguage('kr');

I18n.putVocabularies({
  kr: {
    'Sign Up with Amazon': 'Amazon 로그인',
    'Sign Up with Apple': 'Apple 로그인',
    'Sign Up with Facebook': 'Facebook 로그인',
    'Sign Up with Google': 'Google 로그인',
    'Password must have at least 8 characters':'비밀번호는 8자리 이상이어야합니다.',
    'User does not exist.':'사용자가 존재하지 않습니다.',
    'Enter your email':'이메일을 입력해주세요.',
  }
});

export {I18n,translations};