$fonts = @(
    "https://fonts.gstatic.com/s/poppins/v23/pxiEyp8kv8JHgFVrJJfecg.woff2",
    "https://fonts.gstatic.com/s/poppins/v23/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2",
    "https://fonts.gstatic.com/s/poppins/v23/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2",
    "https://fonts.gstatic.com/s/poppins/v23/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2"
)

$outputFiles = @(
    "src/assets/fonts/Poppins-Regular.woff2",
    "src/assets/fonts/Poppins-Bold.woff2",
    "src/assets/fonts/Poppins-SemiBold.woff2",
    "src/assets/fonts/Poppins-Medium.woff2"
)

for ($i = 0; $i -lt $fonts.Length; $i++) {
    Invoke-WebRequest -Uri $fonts[$i] -OutFile $outputFiles[$i]
} 