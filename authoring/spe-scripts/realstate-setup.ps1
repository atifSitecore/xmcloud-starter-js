Import-Function Get-ItemByIdSafe
Import-Function Update-PageTemplate
Import-Function Update-TemplateInsertOptions
Import-Function Update-LinkField

function Invoke-ModuleScriptBody {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory = $true, Position = 0 )]
        [Item]$Site,
    
        [Parameter(Mandatory = $true, Position = 1 )]
        [Item[]]$TenantTemplates	
    )
    
    begin {
        Write-Verbose "Kit Next Realstate - Post Site Creation Script"
        Write-Verbose "Cmdlet Invoke-ModuleScriptBody - Begin"
        Import-Function Get-ProjectTemplateBasedOnBaseTemplate
    }
    
    process {
        Write-Verbose "Cmdlet Invoke-ModuleScriptBody - Process"
        $sitePath = $Site.Paths.Path
        $siteCollection = $Site.Parent
        $item = Get-Item -Path "$sitePath/Home" -Language $Site.Language
        Write-Verbose "My site: $sitePath"

        # Create Data folders for Real Estate components
        Write-Verbose "Creating Data folders for Real Estate components"
        $dataFolder = Get-Item -Path "$sitePath/Data" -Language $Site.Language
        
        if ($dataFolder) {
            # Property Hero Folder
            $propertyHeroFolderTemplate = "{0E251B62-6581-4A2D-B0E3-A7F7B4F6E2E1}"
            if (-not (Test-Path "$sitePath/Data/Property Heroes")) {
                New-Item -Path "$sitePath/Data" -Name "Property Heroes" -ItemType "Common/Folder"
                Write-Verbose "Created Property Heroes folder"
            }
            
            # Property Card Folder
            if (-not (Test-Path "$sitePath/Data/Properties")) {
                New-Item -Path "$sitePath/Data" -Name "Properties" -ItemType "Common/Folder"
                Write-Verbose "Created Properties folder"
            }
            
            # Property Grid Folder
            if (-not (Test-Path "$sitePath/Data/Property Grids")) {
                New-Item -Path "$sitePath/Data" -Name "Property Grids" -ItemType "Common/Folder"
                Write-Verbose "Created Property Grids folder"
            }
            
            # Community Card Folder
            if (-not (Test-Path "$sitePath/Data/Communities")) {
                New-Item -Path "$sitePath/Data" -Name "Communities" -ItemType "Common/Folder"
                Write-Verbose "Created Communities folder"
            }
            
            # Community Showcase Folder
            if (-not (Test-Path "$sitePath/Data/Community Showcases")) {
                New-Item -Path "$sitePath/Data" -Name "Community Showcases" -ItemType "Common/Folder"
                Write-Verbose "Created Community Showcases folder"
            }
            
            # News Card Folder
            if (-not (Test-Path "$sitePath/Data/News")) {
                New-Item -Path "$sitePath/Data" -Name "News" -ItemType "Common/Folder"
                Write-Verbose "Created News folder"
            }
            
            # Property Enquiry Form Folder
            if (-not (Test-Path "$sitePath/Data/Enquiry Forms")) {
                New-Item -Path "$sitePath/Data" -Name "Enquiry Forms" -ItemType "Common/Folder"
                Write-Verbose "Created Enquiry Forms folder"
            }
        }

        # Add available renderings to placeholders
        Write-Verbose "Adding Real Estate renderings to available renderings"
        
        $realstateRenderingsPath = '/sitecore/layout/Renderings/Project/kit-next-realstate'
        
        # Get all realstate renderings
        $propertyHeroRendering = Get-Item -Path "$realstateRenderingsPath/Property/PropertyHero" -ErrorAction SilentlyContinue
        $propertyCardRendering = Get-Item -Path "$realstateRenderingsPath/Property/PropertyCard" -ErrorAction SilentlyContinue
        $propertyGridRendering = Get-Item -Path "$realstateRenderingsPath/Property/PropertyGrid" -ErrorAction SilentlyContinue
        $communityCardRendering = Get-Item -Path "$realstateRenderingsPath/Community/CommunityCard" -ErrorAction SilentlyContinue
        $communityShowcaseRendering = Get-Item -Path "$realstateRenderingsPath/Community/CommunityShowcase" -ErrorAction SilentlyContinue
        $newsCardRendering = Get-Item -Path "$realstateRenderingsPath/News/NewsCard" -ErrorAction SilentlyContinue
        $propertyEnquiryFormRendering = Get-Item -Path "$realstateRenderingsPath/Forms/PropertyEnquiryForm" -ErrorAction SilentlyContinue
        
        Write-Verbose "Real Estate site setup completed successfully"
    }
    
    end {
        Write-Verbose "Cmdlet Invoke-ModuleScriptBody - End"
    }
}
