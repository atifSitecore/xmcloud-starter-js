# PowerShell script for Sitecore Properties post-site-creation automation
# This script links dictionary, sets up sample images, and performs other setup tasks

param(
    [string]$siteName
)

Write-Host "Starting Sitecore Properties post-creation automation for site: $siteName"

# Link dictionary
Set-ItemProperty -Path "master:\sitecore\content\$siteName" -Name Dictionary -Value "/sitecore/content/Sitecore Properties/Dictionary"

# Import sample images to media library
Import-Item -Path "/sitecore/media library/Sitecore Properties/Sample Images" -Source "$(Resolve-Path .\Add Sample Images)"

# Setup taxonomy categories and amenities
$taxonomyPath = "master:\sitecore\content\$siteName\Taxonomy"
New-Item -Path $taxonomyPath -Name "Residential" -ItemType "TaxonomyCategory"
New-Item -Path $taxonomyPath -Name "Commercial" -ItemType "TaxonomyCategory"
New-Item -Path $taxonomyPath -Name "Luxury" -ItemType "TaxonomyCategory"
New-Item -Path $taxonomyPath -Name "Waterfront" -ItemType "TaxonomyCategory"
New-Item -Path $taxonomyPath -Name "Family" -ItemType "TaxonomyCategory"
New-Item -Path $taxonomyPath -Name "Investment" -ItemType "TaxonomyCategory"

$amenitiesPath = "$taxonomyPath\Amenities"
New-Item -Path $amenitiesPath -Name "Private Pool" -ItemType "Amenity"
New-Item -Path $amenitiesPath -Name "Smart Home System" -ItemType "Amenity"
New-Item -Path $amenitiesPath -Name "Rooftop Terrace" -ItemType "Amenity"
New-Item -Path $amenitiesPath -Name "Fitness Center" -ItemType "Amenity"
New-Item -Path $amenitiesPath -Name "Children's Play Area" -ItemType "Amenity"
New-Item -Path $amenitiesPath -Name "Private Beach" -ItemType "Amenity"

Write-Host "Sitecore Properties post-creation automation complete."
