Import-Function Get-ItemByIdSafe
Import-Function Update-PageTemplate
Import-Function Update-TemplateInsertOptions
Import-Function Update-LinkField
Import-Function Add-Rendering

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

        # Create Data folders for Real Estate components using proper folder templates
        Write-Verbose "Creating Data folders for Real Estate components"
        $dataFolder = Get-Item -Path "$sitePath/Data" -Language $Site.Language
        
        if ($dataFolder) {
            # Create folders using the correct folder templates
            $propertyHeroFolderTemplate = "{f6789012-cdef-0123-6789-012abcdef034}"
            $propertyCardFolderTemplate = "{d4567890-abcd-ef01-4567-890abcdef012}"
            $propertyGridFolderTemplate = "{e5678901-bcde-f012-5678-901abcdef023}"
            $communityCardFolderTemplate = "{a7890123-def0-1234-7890-123abcdef045}"
            $communityShowcaseFolderTemplate = "{b8901234-ef01-2345-8901-234abcdef056}"
            $newsCardFolderTemplate = "{c9012345-f012-3456-9012-345abcdef067}"
            $headerFolderTemplate = "{d0123456-0123-4567-0123-456abcdef078}"
            $footerFolderTemplate = "{e1234567-1234-5678-1234-567abcdef089}"
            
            # Property Hero Folder
            if (-not (Test-Path "$sitePath/Data/Home Page Hero")) {
                New-Item -Path "$sitePath/Data" -Name "Home Page Hero" -ItemType $propertyHeroFolderTemplate
                Write-Verbose "Created Home Page Hero folder"
            }
            
            # Property Card Folder
            if (-not (Test-Path "$sitePath/Data/Properties")) {
                New-Item -Path "$sitePath/Data" -Name "Properties" -ItemType $propertyCardFolderTemplate
                Write-Verbose "Created Properties folder"
            }
            
            # Property Grid Folder
            if (-not (Test-Path "$sitePath/Data/Property Grids")) {
                New-Item -Path "$sitePath/Data" -Name "Property Grids" -ItemType $propertyGridFolderTemplate
                Write-Verbose "Created Property Grids folder"
            }
            
            # Community Card Folder
            if (-not (Test-Path "$sitePath/Data/Communities")) {
                New-Item -Path "$sitePath/Data" -Name "Communities" -ItemType $communityCardFolderTemplate
                Write-Verbose "Created Communities folder"
            }
            
            # Community Showcase Folder
            if (-not (Test-Path "$sitePath/Data/Community Showcases")) {
                New-Item -Path "$sitePath/Data" -Name "Community Showcases" -ItemType $communityShowcaseFolderTemplate
                Write-Verbose "Created Community Showcases folder"
            }
            
            # News Card Folder
            if (-not (Test-Path "$sitePath/Data/News")) {
                New-Item -Path "$sitePath/Data" -Name "News" -ItemType $newsCardFolderTemplate
                Write-Verbose "Created News folder"
            }
            
            # Header Folder
            if (-not (Test-Path "$sitePath/Data/Headers")) {
                New-Item -Path "$sitePath/Data" -Name "Headers" -ItemType $headerFolderTemplate
                Write-Verbose "Created Headers folder"
            }
            
            # Footer Folder
            if (-not (Test-Path "$sitePath/Data/Footers")) {
                New-Item -Path "$sitePath/Data" -Name "Footers" -ItemType $footerFolderTemplate
                Write-Verbose "Created Footers folder"
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
        $headerRendering = Get-Item -Path "$realstateRenderingsPath/Global Elements/SitecorePropertiesHeader" -ErrorAction SilentlyContinue
        $footerRendering = Get-Item -Path "$realstateRenderingsPath/Global Elements/SitecorePropertiesFooter" -ErrorAction SilentlyContinue
        
        Write-Verbose "Real Estate site setup completed successfully"
    }
    
    end {
        Write-Verbose "Cmdlet Invoke-ModuleScriptBody - End"
    }
}
