import { deviceHeight } from '@/configs';
import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(theme => {
  return {
    container: {
      flex: 1,
      height: deviceHeight,
      backgroundColor: 'transparent',
    },
    header: {
      height: 50,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginBottom: 10,
    },
    content: {
      marginHorizontal: 20,
    },
    optionItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
    },
    optionText: {
      fontSize: 20,
      fontWeight: '600',
      marginHorizontal: 60,
      textAlign: 'center',
      color: theme.colors.primary,
    },
    button: {
      width: 300,
      borderRadius: 8,
      backgroundColor: '#03801F',
      height: 50,
    },
    buttonContainer: {
      alignItems: 'center',
      borderRadius: 8,
      marginTop: 30,
    },
    avatar: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      borderRadius: 50,
    },
    txtUserName: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.textMain,
    },
    txtFullName: {
      fontSize: 15,
      color: theme.colors.textMain,
    },
  };
});

export default useStyles;
