#!/usr/bin/env python3
import logging
import os
import io
from smb.SMBConnection import SMBConnection

from modules.backup_clouds.samba.config import SambaBackupCloud, SambaBackupCloudConfiguration
from modules.common.abstract_device import DeviceDescriptor
from modules.common.configurable_backup_cloud import ConfigurableBackupCloud

log = logging.getLogger(__name__)


def upload_backup(config: SambaBackupCloudConfiguration, backup_filename: str, backup_file: bytes) -> None:
    conn = SMBConnection(config.smb_user, config.smb_password, os.uname()[1], config.smb_server, use_ntlm_v2=True)
    log.info("SMB Verbindungsaufbau")
    conn.connect(config.smb_server,139)

    if config.smb_path is None:
        log.info("Backup auf //" + config.smb_server + '/' + config.smb_share )
        conn.storeFile(config.smb_share, backup_filename.replace(':',''), io.BytesIO(backup_file))
    else:
        log.info("Backup auf //" + config.smb_server + '/' + config.smb_share + '/' + config.smb_path )
        conn.storeFile(config.smb_share, config.smb_path + backup_filename.replace(':',''), io.BytesIO(backup_file))

    conn.close()


def create_backup_cloud(config: SambaBackupCloud):
    def updater(backup_filename: str, backup_file: bytes):
        upload_backup(config.configuration, backup_filename, backup_file)
    return ConfigurableBackupCloud(config=config, component_updater=updater)


device_descriptor = DeviceDescriptor(configuration_factory=SambaBackupCloud)
