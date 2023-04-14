export default {
  'en': {
    acceThreshold: 'Accelerating Notification',
    notifyLeftTips: 'Notify me whenever there are',
    notifyRightTips: 'waiting queries.',
    accePreference: 'Accelerating Preference',
    jobAlert: 'Email Notification',
    emptyDataLoad: 'Empty Data Job',
    emptyDataLoadDesc: 'Email to the following email address(es) if there is a job loading empty data.',
    metaDataPersist: 'MetaData Persist To HDFS',
    metaDataPersistDesc: 'Email to the following email address(es) if metadata persist to HDFS error.',
    jobState: 'Job State',
    errorJobDesc: 'Email to the following email address(es) when the issue occurred of the job with the according chosen state(s).',
    emails: 'Email Address:',
    noData: 'No Data',
    pleaseInputEmail: 'Please enter email',
    pleaseInputVaildEmail: 'Please enter a valid email address.',
    defaultDBTitle: 'Default Database',
    defaultDB: 'Default Database',
    defaultDBNote1: 'If a database is set as default, its name could be omitted in SQL statements when executing a query or importing a SQL file.',
    defaultDBNote2: 'Modifying the default database may result in saved queries or SQL files being unavailable. Please modify it carefully.',
    confirmDefaultDBTitle: 'Modify Default Database',
    confirmDefaultDBContent: 'Modifying the default database may result in saved queries or SQL files being unavailable. Please confirm whether to modify the default database to {dbName} ?',
    yarnQueue: 'YARN Application Queue',
    yarnQueueTip: 'The system admin user can set the YARN Application Queue of the project. After setting the queue, the jobs will be submitted to the specified queue to achieve computing resources allocation and separation between projects.',
    yarnQueueWarn: 'Note: please confirm that the set queue is available, otherwise the jobs may fail to execute or be submitted to the default queue in YARN.',
    yarnIsEmpty: 'The queue name is required',
    yarnFormat: 'Incorrect format',
    computedColumns: 'Computed Columns',
    exposingCC: 'Exposing Computed Columns',
    exposingCCDesc: 'With this switch ON, computed columns would be exposed to the connected BI tools or others systems.',
    confirmCloseExposeCC: 'With this switch OFF, computed columns won\'t be exposed to the connected BI tools or other systems. It might cause the connected systems unusable. Are you sure you want to turn it off?',
    kerberosAcc: 'Kerberos Configuration',
    principalName: 'Principal Name',
    keytabFile: 'Keytab File',
    kerberosTips: 'System admin can configure the Kerberos account in project level. After that, Hive table list will be shown with the permission of this Kerberos permission.',
    maxSizeLimit: 'Files cannot exceed 5M.',
    fileTypeError: 'Invalid file format.',
    uploadFileTips: 'Supported file formats is keytab. Supported file size is up to 5 MB.',
    selectFile: 'Select the file',
    kerberosFileRequied: 'Please upload keytab file',
    refreshTitle: 'Refresh DataSource',
    refreshNow: 'Refresh Now',
    refreshLater: 'Refresh Later',
    refreshContent: 'Update successfully. The configuration will take effect after refreshing the datasource cache. Please confirm whether to refresh now. </br> Note: It will take a long time to refresh the cache. If you need to configure multiple projects, it is recommended to refresh when configuring the last project.',
    openSCDSetting: 'Turn On Support History table',
    openSCDTip: 'Please note that known limitations of this feature might exist. Check ',
    userManual: 'user manual',
    openSCDTip1: ' for details.',
    closeSCDSetting: 'Turn Off Support History table',
    confirmOpenTip: 'Do you want to continue?',
    SCD2Settings: 'Support History table',
    nonEqualJoin: 'Show non-equal join conditions for History table',
    noEqualDecription: 'With this switch ON, you may use the history table for slowly changing dimension (as was): Non-equal join conditions (≥, <) could be used for modeling, building and queries. ',
    confirmOpen: 'Turn On',
    closeSCDTip: 'With this switch OFF, non-equal join conditions (≥, <) couldn\'t be used when editing model. The following models will go offline automatically as they include non-equal join conditions:',
    closeSCDTip1: 'To make these models online, please delete the non-equal join conditions, or turn this switch ON. Do you want to continue?',
    confirmClose: 'Turn Off',
    mulPartitionSettings: 'Multilevel Partitioning',
    mulPartition: 'Support Multilevel Partitioning',
    mulPartitionDecription: 'With this switch ON, the models under this project could be partitioned by another desired column in addition to time partitioning.',
    openMulPartitionSetting: 'Turn On Multilevel Partitioning',
    openMulPartitionTip: 'Please note that this feature is still in BETA phase. Potential risks or known limitations might exist. Check ',
    openMulPartitionTip1: ' for details.',
    closeMulPartitionSetting: 'Turn Off Multilevel Partitioning',
    closeMulPartitionTip: 'With this switch OFF,  multilevel partitioning couldn’t be used. The following models would go offline automatically as they used multilevel partitioning:',
    closeMulPartitionTip1: 'To make these models online, please delete all subpartitions, or turn this switch ON. Do you want to continue?',
    snapshotTitle: 'Snapshot Management',
    snapshotManagment: 'Support Snapshot Management',
    snapshotDesc: 'The snapshot is a read-only static view of a source table. Snapshot could reduce costs for building costs in some cases.',
    snapshotAutoRefresh: 'Auto Refresh',
    frequency: 'Frequency',
    timed: 'Timed',
    minute: 'Minute',
    hours: 'Hour(s)',
    day: 'Day(s)',
    openSnapshotTitle: 'Turn On Snapshot Management',
    openManualTips: 'After turning on this option, the system will no longer automatically build, refresh, delete snapshots. You could manage them in Snapshot page under Studio.<br/>If a snapshot is being built at this time, it will show in the snapshot list after the job is completed.<br/>Do you want to continue?',
    closeSnapshotTitle: 'Turn Off Snapshot Management',
    closeManualTips: 'After turning off, you cannot manually manage snapshots. The system will build, refresh, and delete snapshots as needed. <br/>The running jobs of building or refreshing snapshot will not be affected.<br/>Do you want to continue?',
    projectConfig: 'Custom Project Configuration',
    configuration: 'Configuration',
    deleteConfig: 'Delete Configuration',
    confirmDeleteConfig: 'Are you sure you want to delete the custome configuration [{key}]?',
    secondaryStorage: 'Tiered Storage',
    supportSecStorage: 'Support Tiered Storage',
    supportSecStorageDesc: 'With this switch ON, the basic table index will be synchronized to the tiered storage. It will improve the performance of ad-hoc query and detail query analysis scenarios.',
    chooseNode: 'Please select node',
    storageNode: 'Storage Node',
    openSecStorageTitle: 'Turn On Tiered Storage',
    openSecStorageTips: 'With this switch ON, the selected nodes can\'t be removed from the project. The models under this project could use the tiered storage on demand.<br/><br/>The parquet files containing data prior to 1970 cannot be loaded. <a class="ky-a-like" href="https://docs.kyligence.io/books/v4.5/en/Designers-Guide/tiered_storage/" target="_blank">View the manual <i class="el-ksd-icon-spark_link_16"></i></a>',
    openSecConfirmBtn: 'Turn On',
    closeSecStorageSetting: 'Turn Off Tiered Storage',
    closeSecStorageTip: 'With this switch OFF, the data stored in the tiered storage will be cleared. The query performance might be affected.',
    affectedModels: 'The affected model:',
    secStorageInputTitle: 'Please enter "Turn Off Tiered Storage" to confirm.',
    emptyTips: 'Can\'t be empty'
  }
}
