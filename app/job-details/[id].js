import React, { useCallback, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import { Stack } from "@react-navigation/stack";


const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = ({ route }) => {
  const { id } = route.params ?? {}; // Ensure route.params is defined
  const navigation = useNavigation();
  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: id,
  });

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title='Qualifications'
            points={data[0]?.job_highlights?.Qualifications ?? ["N/A"]}
          />
        );

      case "About":
        return (
          <JobAbout info={data[0]?.job_description ?? "No data provided"} />
        );

      case "Responsibilities":
        return (
          <Specifics
            title='Responsibilities'
            points={data[0]?.job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    
      <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
        <Company
          companyLogo={data[0]?.employer_logo}
          jobTitle={data[0]?.job_title}
          companyName={data[0]?.employer_name}
          location={data[0]?.job_country}
        />

        <JobTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text>No data available</Text>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            {displayTabContent()}
          </ScrollView>
        )}

        <JobFooter
          url={
            data[0]?.job_google_link ?? "https://careers.google.com/jobs/results/"
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default JobDetails;
