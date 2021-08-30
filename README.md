# Agfa Jenkins Firefox Addon

A Firefox addon for the Agfa Jenkins server, which allows you to copy the 
page URL into your clipboard as a bread crumb

For example if the URL is

http://ei-ci.agfahealthcare.com/jenkins/job/ei-topic-sloth-IEI-130528-use-dicomconfig-cache/job/continuous%20pacs%20extended-smoke-tests/lastCompletedBuild/testReport/com.agfa.test.seriesheader/MissingInstancesOnArchiveSeriesheaderTest/missingInstancesInArchive_ShouldReturnSeriesHeaderButNotStoreIt_directSHRead__true__storageGroup_ARCHIVE_TAR__fileNr_3__/

It will convert it to this (and copy it to the clipboard)

[ei-topic-sloth-IEI-130528-use-dicomconfig-cache](http://ei-ci.agfahealthcare.com/jenkins/job/ei-topic-sloth-IEI-130528-use-dicomconfig-cache) > [continuous pacs extended-smoke-tests](http://ei-ci.agfahealthcare.com/jenkins/job/ei-topic-sloth-IEI-130528-use-dicomconfig-cache/job/continuous%20pacs%20extended-smoke-tests) > [lastCompletedBuild](http://ei-ci.agfahealthcare.com/jenkins/job/ei-topic-sloth-IEI-130528-use-dicomconfig-cache/job/continuous%20pacs%20extended-smoke-tests/lastCompletedBuild) > [testReport](http://ei-ci.agfahealthcare.com/jenkins/job/ei-topic-sloth-IEI-130528-use-dicomconfig-cache/job/continuous%20pacs%20extended-smoke-tests/lastCompletedBuild/testReport) > [com.agfa.test.seriesheader](http://ei-ci.agfahealthcare.com/jenkins/job/ei-topic-sloth-IEI-130528-use-dicomconfig-cache/job/continuous%20pacs%20extended-smoke-tests/lastCompletedBuild/testReport/com.agfa.test.seriesheader) > [MissingInstancesOnArchiveSeriesheaderTest](http://ei-ci.agfahealthcare.com/jenkins/job/ei-topic-sloth-IEI-130528-use-dicomconfig-cache/job/continuous%20pacs%20extended-smoke-tests/lastCompletedBuild/testReport/com.agfa.test.seriesheader/MissingInstancesOnArchiveSeriesheaderTest) > [missingInstancesInArchive_ShouldReturnSeriesHeaderButNotStoreIt_directSHRead__true__storageGroup_ARCHIVE_TAR__fileNr_3__](http://ei-ci.agfahealthcare.com/jenkins/job/ei-topic-sloth-IEI-130528-use-dicomconfig-cache/job/continuous%20pacs%20extended-smoke-tests/lastCompletedBuild/testReport/com.agfa.test.seriesheader/MissingInstancesOnArchiveSeriesheaderTest/missingInstancesInArchive_ShouldReturnSeriesHeaderButNotStoreIt_directSHRead__true__storageGroup_ARCHIVE_TAR__fileNr_3__)

Its a much easier format to read and is useful for pasting into Microsoft Teams (using HTML) or a code 
review in Bitbucket/GitHub (as Markdown) or a JIRA issue (as JIRA format)