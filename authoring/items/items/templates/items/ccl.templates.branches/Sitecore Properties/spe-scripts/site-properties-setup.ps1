# PowerShell script for Sitecore Properties post-site-creation automation
# This script links dictionary, sets up sample images, and performs other setup tasks

param(
    [string]$siteName
)

Write-Host "Starting Sitecore Properties post-creation automation for site: $siteName"

# Example: Link dictionary
# Set-ItemProperty -Path "master:\sitecore\content\$siteName" -Name Dictionary -Value "/sitecore/content/Sitecore Properties/Dictionary"

# Example: Add sample images to media library
# Import-Item -Path "/sitecore/media library/Sitecore Properties/Sample Images" -Source "$(Resolve-Path .\Add Sample Images)"

# Add more automation steps as needed

Write-Host "Sitecore Properties post-creation automation complete."
