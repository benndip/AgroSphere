import { StyleSheet } from 'react-native';
import { fonts } from '../../assets/fonts';
import { DEVICE_HEIGHT, DEVICE_WIDTH, rF, rH, rW } from '../../constants/sizes';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    padding: rW(4.5),
    borderRadius: rW(3),
  },
  name: {
    fontFamily: fonts.monserrat,
    color: '#fff',
    fontSize: 17,
  },
  pin: {
    fontFamily: fonts.poppins,
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rH(1),
  },
  bottomView: {},
  accountBalanceText: {
    fontFamily: fonts.monserrat,
    fontWeight: 'bold',
    fontSize: rF(3.2),
    color: '#fff',
  },
  asterixsView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  asterixs: {
    fontSize: 26,
    color: '#fff',
  },
  kycVerifyButton: {
    borderRadius: 10,
    marginBottom: DEVICE_HEIGHT * 0.02,
    justifyContent: 'space-between',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  kycText: {
    color: '#fff',
    marginLeft: 10,
  },
  addPaymentMethod: {
    borderRadius: rW(2.2),
    marginTop: rH(2),
  },
  addPaymentMethodText: {
    color: '#fff',
    marginLeft: rW(2.5),
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: rW(5),
    gap: rW(2),
    height: DEVICE_HEIGHT * 0.11,
    backgroundColor: '#fff',
    marginBottom: rH(3),
    marginTop: rH(2),
    borderRadius: rW(2),
    elevation: 1,
    shadowColor: colors.darkPrimary,
  },
  actionIcon: { width: rW(6.5), height: rW(6.5), resizeMode: 'contain' },
  actionButton: {
    // padding: rW(3),
    gap: rW(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rW(3),
  },
  actionText: {
    fontSize: rF(1.4),
    color: colors.darkPrimary,
  },
  bottomSection: {
    // paddingHorizontal: DEVICE_WIDTH * 0.07,
  },
  historyView: {
    paddingTop: rH(1),
    paddingBottom: rH(3),
    gap: rH(1.7),
    backgroundColor: '#fff',
    borderRadius: rW(5),
    padding: rW(2),
  },
});

export default styles;
