import urllib
from xml.dom import minidom

key = 'AcLnzPwwk3NuHwplfdTmnw'
user_id = '23557567' #my userid where books are initially scanned
shelf = 'ydp' #all YDP books are on this particular shelf
url = 'http://www.goodreads.com/review/list?format=xml&v=2&per_page=200&id=%s&key=%s&shelf=%s'

def run():
	xml = urllib.urlopen(url % (user_id, key, shelf))
	xmldoc = minidom.parse(xml)		

	for review in xmldoc.getElementsByTagName('review'):
		print get_book_details(review)

def get_book_details(xmldoc):
	return {
		"owner": shelf,
		"book": {
			"isbn": getText(xmldoc.getElementsByTagName('isbn13')[0].childNodes), 
			"external_id": {"site": "goodreads", "id": getText(xmldoc.getElementsByTagName('id')[1].childNodes)},
			"title": getText(xmldoc.getElementsByTagName('title')[0].childNodes),
			"authors": get_authors(xmldoc.getElementsByTagName('authors')),
			"image_url": getText(xmldoc.getElementsByTagName('image_url')[0].childNodes),
			"link": getText(xmldoc.getElementsByTagName('link')[0].childNodes),
			"description": getText(xmldoc.getElementsByTagName('description')[0].childNodes),
			"published": getText(xmldoc.getElementsByTagName('published')[0].childNodes)
			}
		}

def get_authors(xmldoc):
	return [getText(author.getElementsByTagName('name')[0].childNodes) for author in xmldoc]

def getText(nodelist):
    rc = []
    for node in nodelist:
        if node.nodeType == node.TEXT_NODE:
            rc.append(node.data)
    return ''.join(rc)

if __name__ == "__main__":
	run()
