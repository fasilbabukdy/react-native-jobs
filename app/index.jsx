import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { COLORS, icons, images, SIZES } from '../constants';
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn';
import Welcome from '../components/home/welcome/Welcome';
import Nearbyjobs from '../components/home/nearby/Nearbyjobs';
import Popularjobs from '../components/home/popular/Popularjobs';

const Home = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const router = useRouter();
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />,
					headerRight: () => <ScreenHeaderBtn iconUrl={images.profile} dimension='60%' />,
					headerTitle: '',
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flex: 1, padding: SIZES.medium }}>
					<Welcome
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
						handleClick={() => {
							if (searchTerm) {
								router.push(`/search/${searchTerm}`);
							}
						}}
					/>
					<Popularjobs />
					<Nearbyjobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
