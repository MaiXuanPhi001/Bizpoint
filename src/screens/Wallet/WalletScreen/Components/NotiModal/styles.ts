import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(theme => {
  return {
    container: {
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
      marginHorizontal: 100,
      textAlign: 'center',
      color: theme.colors.primary,
    },
    button: {
      width: 300,
      borderRadius: 8,
      backgroundColor: '#03801F',
      height: 50,
    },
    notTextNoti: {
      fontSize: normalize(18),
      fontWeight: '600',
      color: theme.colors.grey3,
    },
    buttonContainer: {
      alignItems: 'center',
      borderRadius: 8,
      marginTop: 30,
    },
    containerModal: {
      backgroundColor: 'rgba(239, 239, 239, 1)',
      borderWidth: 2,
      borderRadius: 10,
      borderColor: theme.colors.grey3,
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingTop: 40,
      marginVertical: 60,
      height: 400,
      marginHorizontal: 10,
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
