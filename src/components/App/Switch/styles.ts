import { makeStyles, normalize } from '@rneui/themed';

interface TrackSize {
  width: number;
  height: number;
}

export const PADDING = 2;
export const THUMB_SIZE = 24;

const useStyles = (track: TrackSize, thumb: number) => {
  return makeStyles(({ colors }) => ({
    trackContainer: {
      width: normalize(track.width),
      height: normalize(track.height),
      borderRadius: normalize(track.height / 2),
      backgroundColor: 'rgba(224, 224, 224, 1)',
      padding: normalize(PADDING),
    },
    thumbContainer: {
      width: normalize(thumb),
      height: normalize(thumb),
      borderRadius: normalize(thumb / 2),
      backgroundColor: '#FFF',
    },
  }));
};

export default useStyles;
