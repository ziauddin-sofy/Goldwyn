import React from 'react';
import { View, StyleSheet } from 'react-native';
import ShimmerEffect from './ShimmerEffect'; // Assuming you have a separate file for the ShimmerEffect component

const SkeletonJobItem = ({ index }) => {
  return (
    <View key={index} style={[styles.skeletonItem]}>
      {/* Skeleton content */}
      <View style={styles.header}>
        <View style={styles.avatar} />
        <View style={styles.textContainer}>
          <View style={styles.title} />
          <View style={styles.subtitle} />
          <View style={styles.location} />
        </View>
      </View>
      <View style={styles.description} />
      {/* Apply shimmer effect */}
      <ShimmerEffect style={styles.shimmerOverlay} />
    </View>
  );
};

export default SkeletonJobItem;

const styles = StyleSheet.create({
  skeletonItem: {
    borderRadius: 8,
    backgroundColor: '#F4F4F4', // Adjust the background color to match your design
    marginBottom: 8,
    width: '100%',
    height: 150, // Adjust the height as needed
    position: 'relative', // To position the shimmer effect on top
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EFEFEF', // Placeholder color for the avatar
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    width: '50%',
    height: 16,
    backgroundColor: '#EFEFEF', // Placeholder color for the title
    marginBottom: 8,
  },
  subtitle: {
    width: '70%',
    height: 14,
    backgroundColor: '#EFEFEF', // Placeholder color for the subtitle
    marginBottom: 8,
  },
  location: {
    width: '40%',
    height: 14,
    backgroundColor: '#EFEFEF', // Placeholder color for the location
  },
  description: {
    width: '80%',
    height: 12,
    backgroundColor: '#EFEFEF', // Placeholder color for the description
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  shimmerOverlay: {
    borderRadius: 8,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
