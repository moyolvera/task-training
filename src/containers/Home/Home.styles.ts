import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemWrapper: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#f2f2f2',
  },
  row: {
    flexDirection: 'row',
  },
  smallColumn: {
    width: 80,
  },
  simpleFlex: {
    flex: 1,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  storage: {
    height: 200,
    maxHeight: 200,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default styles;
